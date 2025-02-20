export async function getForderungsportfolioResult(){
    const localXrm = window.top.xrmCLIFrame;
    const entityName = "rit_forderungsportfolio";
    const systemAbfrageOption = "?$select=rit_name";

    const resultArray = await localXrm.WebApi.retrieveMultipleRecords(entityName, systemAbfrageOption);
    return resultArray.entities || [];
};