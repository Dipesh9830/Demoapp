const  {user}  = require('../models');
//---------------login form-------------------//
const login = async(req,res,next)=>{
    const uemail = req.body.email;
    const upassword = req.body.password;

    if(!uemail || !upassword){
        return res.status(400).send('invalid username or password')
    }
    const user = await user.findOne({ where: { email: uemail    } });
    if(user.password === upassword){
        return  res.status(200).send('login successful');
    }
    else{
        return res.status(400).send('invalid username or password');
    }

}
//-----------------Registration---------------------//
const registration = async(req, res, next)=>{
    const uemail = req.body.email;
    const upassword = req.body.password;
    const uusername = req.body.username;
    
    if(!uemail || !upassword || !uusername){
        return res.status(400).send('invalid username or password')
    }
    const user = await user.create({username:"", password:"", email:"", startup_id:""});
    console.log("Your id has been created succesfully");

}
//--------------------dashboard------------------------------//
const dashboard = async(req,res, next) => {
    const startup_id = req.body.startup_id;
    const Reason_for_starting_a_company = req.body.Reason_for_starting_a_company;
    const What_is_your_industry = req.body.What_is_your_industry;
    const What_is_your_experience_in_this_industry = req.body.What_is_your_experience_in_this_industry;
    const  What_is_your_businessmodel = req.body.What_is_your_businessmodel;
    const Tell_us_about_your_product = req.body.Tell_us_about_your_product;
    const What_is_your_exit_strategy = req.body.What_is_your_exit_strategy;
    const If_your_product_has_been_released_what_traction_do_you_have = req.body.If_your_product_has_been_released_what_traction_do_you_have;
    
    if(!startup_id || !Reason_for_starting_a_company || !What_is_your_industry || !What_is_your_experience_in_this_industry || !What_is_your_businessmodel ||
        !Tell_us_about_your_product ||  !What_is_your_exit_strategy || !If_your_product_has_been_released_what_traction_do_you_have ){
            return res.status(400).send('Please select the remaining questions')
        }

}

module.exports = {
    login: login,
    registration: registration,
    dashboard: dashboard
}