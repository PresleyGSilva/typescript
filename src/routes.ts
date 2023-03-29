import { Request, Response } from "express";

import createCourseService from "./createCourseService";

export function createCouse(req: Request, res: Response) {

    createCourseService.execute({
        name: "NodeJS",
        educator: "Dani",
        duration: 10
    })

    return res.send();
}