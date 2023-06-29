let quer="";
const create=(con,data,callback)=>{
query="INSERT INTO fruity SET ?";
con.query(query,[data],callback);
}
module.exports=
{
    create,
};