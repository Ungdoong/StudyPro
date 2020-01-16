import jsonwebtoken from "jsonwebtoken"
import {users} from "../models"

const jwt = jsonwebtoken

export const userDetail = (req, res) => res.send("UserDetail");

export const changePassword = (req, res) => res.send("ChangePassword");

export const signin = function(req, res, next) {
    const {email, password} = req.body;

    users.findOne({where: {email}})
        .then(user => {
            if (user) {
                if (user.verify(password)) {
                    let token = jwt.sign(
                        {nickname:user.dataValues.nickname},
                        process.env.SECRET_KEY,
                        {expiresIn : '5m'}
                    )
                    res.cookie("user", token)
                    res.json({
                        token: token,
                    })
                } else {
                    res.send("password incorrect")
                }
            } else {
                res.send("email not exist")
            }
        })
};


export const signup = function(req, res, next) {
    const {email, nickname} = req.body;

    users.findOne({where: {email}})
        .then((user)=> {
            if(user) {
                res.send("userEmail exist");
                throw new Error("userEmail exist");
            }
        })
        .then(()=>{
            return users.findOne({where:{nickname}})
        })
        .then((user)=>{
            if(user) {
                res.send("nickname exist");
                throw new Error("nickname exist");
            }
            else {
                users.save(req.body);
                res.send(`create ${email}`)
            }
        })
        .catch((error)=>{
            console.log('이메일 또는 닉네임이 중첩됩니다.');
        })

}
