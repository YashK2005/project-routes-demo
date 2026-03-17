import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");

  if (!path) {
    return Response.json(
      { success: false, message: "Missing 'path' query parameter" },
      { status: 400 }
    );
  }

  try {
    revalidatePath(path);
    return Response.json({
      success: true,
      message: `Revalidated path: ${path}`,
      revalidated: true,
      now: Date.now(),
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: `Failed to revalidate path: ${error}`,
      },
      { status: 500 }
    );
  }
}
