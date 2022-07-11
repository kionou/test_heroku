const users = require("../models/user");

// const base = require("./data");

const dataUser = class{


    // static InsertionUser = (into)=>{
       
    //     let{nom,prenom}=into;
    //     return new Promise((resolve,reject)=>{
    //     let sql= "INSERT INTO users( nom, prenom, createAt, updateAt) VALUES (?,?,?,?)";
    //     base.query(sql,[nom,prenom,new Date(),new Date()],(error,result)=>{
    //         if (result) {
    //             resolve(result) ;
                
    //         } else {
    //             console.log('errrorbase',error);
    //             reject(error) ;
    //         }

    //     })
    // })
    // }


    // static AfficherUser = ()=>{
    
    //     return new Promise((resolve,reject)=>{
    //          let  sqle = "SELECT * FROM users ";
    //          base.query(sqle,(error,result)=>{
    //             if (result) {
    //                 resolve(result)
    //             } else {
                
    //                 reject(error)
    //             }
    //          })
    //     })
 
    // }

       static InsertionUser=  (into)=>{
        return   users.sync({force:true}).then(()=>{
            let{nom,prenom}=into;
            return new Promise(async (next)=>{
               users.create({nom,prenom})
                .then(resultat=>{
                console.log('ss',resultat);
                next({
                success:resultat
                })
            }).catch(err=>{
                console.log("eee",err);
                next ({
                    erreur:err
                })
            })
        })
        }).catch(err=>{
            console.log('rrroorr',err);
        })
      
    }  

        static AfficherUser= async ()=>{
            return new Promise(async (next)=>{
                users.findAll({
                 attributes: ['id', 'nom', 'prenom' ]
                             })
                .then(resultat=>{
                console.log('ss',resultat);
                next({
                success:resultat
                })
            }).catch(err=>{
                console.log("eee",err);
                next ({
                    erreur:err
                })
            })
        })
      
    }
}


module.exports=dataUser;