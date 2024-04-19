import express from 'express'

export const testSimpleApi = (req: express.Request, res: express.Response) => {
    res.status(200).send("OneAtATime from ts");
}