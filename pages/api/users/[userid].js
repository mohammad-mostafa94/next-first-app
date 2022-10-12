import { users } from "../../../usersData";

export default function handler(req, res) {
    const { userid } = req.query;
    if (req.method === "GET") {
        const user = users.find((user) => user.id === parseInt(userid));
        res.status(200).json(user);
    }
    else if (req.method === "DELETE"){
        const deleteUser = users.find((user) => user.id === parseInt(userid));
        const index = users.findIndex(user => user.id === parseInt(userid));
        users.splice(index, 1);
        res.status(200).json(deleteUser);
    }
}