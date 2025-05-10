// analyzeFinancialData.ts

/*export async function analyzeFinancialData(data: string): Promise<string> {
  
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a certified Islamic finance auditor and shariah compliance expert. You evaluate financial contracts according to AAOIFI standards with neutrality, identifying both compliant and non-compliant aspects if any.",
        },
        {
          role: "user",
          content: `
Here is a financial contract or clause:

"${data}"

Please do the following:

1. Assess if the contract is shariah-compliant according to AAOIFI standards.
2. Give a percentage estimate of how likely it is halal vs. haram (e.g., 80% halal, 20% haram).
3. Clearly state if it contains any of the following issues, **only if there is a high probability they exist**:
   - Riba (interest-based elements)
   - Gharar (excessive uncertainty)
   - Ownership or risk transfer problems (e.g. selling what is not owned)
   - Late payment penalties
   - Buy-back arrangements
   - Incorrect placement of promises vs. contracts
4. If everything appears compliant, say so explicitly.

Keep your tone professional, clear, and avoid assuming issues where there are none.`,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch GPT response");
  }

  const result = await response.json();
  return result.choices[0].message.content;
}*/

"use server";

import { promises as fs } from "fs";
import path from "path";

const feedbackFile = path.join(process.cwd(), "feedback.json");
//for now we will only use a simple file to store the feedback later we can work on a database
export async function submitFeedback(feedbackText: string) {
  const entry = {
    feedback: feedbackText,
    timestamp: new Date().toISOString(),
  };

  let data: any[] = [];

  try {
    const file = await fs.readFile(feedbackFile, "utf-8");
    data = JSON.parse(file);
  } catch (e) {
    // File doesn't exist or unreadable
  }

  data.push(entry);
  await fs.writeFile(feedbackFile, JSON.stringify(data, null, 2));
}


export async function analyzeFinancialData(data: string): Promise<string> {
  const feedbackFile = path.join(process.cwd(), "feedback.json");

  let feedbackSnippet = "";

  try {
    const raw = await fs.readFile(feedbackFile, "utf-8");
    const feedbacks = JSON.parse(raw) as { feedback: string; timestamp: string }[];

    // For now we will only take the last one (later we can match by similarity or topic)
    const lastFeedback = feedbacks[feedbacks.length - 1];
    if (lastFeedback) {
      feedbackSnippet = `Here is recent user feedback that should help guide your analysis:\n"${lastFeedback.feedback}"\nPlease consider it if it's relevant.`;
    }
  } catch (e) {
    // No feedback or error reading file
  }

  const apiKey = process.env.OPENAI_API_KEY; // Please store securely

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            `You are a certified Islamic finance auditor and shariah compliance expert. You evaluate financial contracts according to AAOIFI standards with neutrality.

${feedbackSnippet}
`,
        },
        {
          role: "user",
          content: `Here is a financial contract or clause:

"${data}"

Please do the following:

1. Assess if the contract is shariah-compliant according to AAOIFI standards.
2. Give a percentage estimate of how likely it is halal vs. haram (e.g., 80% halal, 20% haram).
3. Clearly state if it contains any of the following issues, **only if there is a high probability they exist**:
   - Riba (interest-based elements)
   - Gharar (excessive uncertainty)
   - Ownership or risk transfer problems (e.g. selling what is not owned)
   - Late payment penalties
   - Buy-back arrangements
   - Incorrect placement of promises vs. contracts
4. If everything appears compliant, say so explicitly.

Keep your tone professional, clear, and avoid assuming issues where there are none.`,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch GPT response");
  }

  const result = await response.json();
  return result.choices[0].message.content;
}
