const users=()=>
{
    console.time('users()');
    for(let i=0;i<1000;i++)
    {
        //do something
    }
    console.timeEnd('users()');
}
users();