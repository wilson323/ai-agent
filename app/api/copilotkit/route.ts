import { CopilotRuntime } from "@copilotkit/runtime";

export async function POST(req: Request): Promise<Response> {
  const copilotRuntime = new CopilotRuntime();
  return copilotRuntime.response(req, null);
}
