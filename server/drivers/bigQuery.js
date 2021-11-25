const {BigQuery} = require('@google-cloud/bigquery');

const pushToBQ = async (mappedPayload) => {
    //TODO: change it when gcp account is avaiable
    const bigquery = new BigQuery({
        keyFilename: path.join(__dirname, './-name.json'),
        projectId: 'insurance-management-system'
    });
    await bigquery.dataset('analytics').table('insurancerDetails').insert(mappedPayload);
    console.log(`Inserted ${mappedPayload.length} rows`);
}
module.exports = pushToBQ;