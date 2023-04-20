import { Request, Response } from "express";

export interface IChatController {
  setMessage(req: Request, res: Response): Promise<void>;
  getMessages(req: Request, res: Response): Promise<void>;
}
