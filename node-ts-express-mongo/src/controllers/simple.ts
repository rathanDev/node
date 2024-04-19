import express from 'express'

exports.testSimpleApi = (req: express.Request, res: express.Response) => {
    res.status(200).send("OneAtATime");
}