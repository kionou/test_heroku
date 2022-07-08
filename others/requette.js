const base = require("./data");

const dataUser = class{


    static InsertionUser = (into)=>{
       
       
        let{nom,prenom}=into;
        return new Promise((resolve,reject)=>{
        let sql= "INSERT INTO users( nom, prenom, createAt, updateAt) VALUES (?,?,?,?)";
        base.query(sql,[nom,prenom,new Date(),new Date()],(error,result)=>{
            if (result) {
                resolve(result) ;
                
            } else {
                console.log('errrorbase',error);
                reject(error) ;
            }

        })
    })
    }

   


    static AfficherUser = ()=>{
    
        return new Promise((resolve,reject)=>{
             let  sqle = "SELECT * FROM users ";
             base.query(sqle,(error,result)=>{
                if (result) {
                    resolve(result)
                } else {
                
                    reject(error)
                }
             })
        })
 
    }

   


 

 

   
}


module.exports=dataUser;