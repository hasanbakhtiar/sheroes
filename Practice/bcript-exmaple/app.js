const bcrypt = require('bcrypt');
let hashData ;
const genPass = async () => {
    hashData = await bcrypt.hash("hasan123", 10);
    console.log(hashData);
}
genPass();

const checkData = async()=>{
    const isSuccess = await bcrypt.compare("hasan123","$2b$10$zmec01J6IhyptyyXoAC0YecjY9xV4fX/9ARTbBWcepMXjHN1RIdhy");
    console.log(isSuccess);
    
}
checkData();

