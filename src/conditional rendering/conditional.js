const ConditionalRendering=()=>{
const islogin=true;
if(islogin){
    return(
        <>
        <h2>welcome user</h2>
        </>
    );
}
else{
    return(
        <><h2>please login
            </h2>
            </>
    );
}
};
export default ConditionalRendering;