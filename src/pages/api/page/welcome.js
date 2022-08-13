import { welcome } from "../../../data/welcome";

export default function handler(req, res) {
    res.status(200).json(welcome)
}