import { NextRequest, NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = process.env.BREVO_LIST_ID;

if (!BREVO_API_KEY) {
  console.error("Missing BREVO_API_KEY environment variable");
}
if (!BREVO_LIST_ID) {
  console.error("Missing BREVO_LIST_ID environment variable");
}

export async function POST(request: NextRequest) {
  try {
    const { fullName, email } = await request.json();

    if (!fullName?.trim() || !email?.includes("@")) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const nameParts = fullName.trim().split(/\s+/);
    const firstname = nameParts[0] || "";
    const lastname = nameParts.slice(1).join(" ") || "";

    const payload = {
      email: email.trim().toLowerCase(),
      attributes: {
        FIRSTNAME: firstname,
        LASTNAME: lastname,
      },
      listIds: [Number(BREVO_LIST_ID)],
      updateEnabled: true,
    };

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": BREVO_API_KEY!,
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo error:", errorData);
      return NextResponse.json(
        { error: errorData.message || "Failed to add contact to Brevo" },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
