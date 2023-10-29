// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    code: number;
    msg: string;
    data: Record<string, unknown>;
};

function genAnswerInfo(reqBody: any) {
    const answerList: { componentId: string; value: string }[] = [];

    Object.keys(reqBody).forEach(key => {
        if (key === 'questionId') return;

        answerList.push({
            componentId: key,
            value: reqBody[key],
        });
    });

    return {
        questionId: reqBody.questionId,
        answerList,
    };
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== 'POST') {
        res.json({ code: 400, msg: 'Bad Method', data: {} });
    }
    // res.status(200).json({ code: 200, msg: 'ok', data});
    try {
        const data = genAnswerInfo(req.body);
        res.redirect('/success');
    } catch (error) {
        res.redirect('/fail');
    }
}
