const talent = require('@google-cloud/talent').v4;
const express = require("express");
const router = new express.Router();

/**
 * List Jobs
 *
 * @param projectId {string} Your Google Cloud Project ID
 * @param tenantId {string} Identifier of the Tenant
 */
function sampleListJobs(pId, tId, userFilter) {
    const client = new talent.JobServiceClient();
    // Iterate over all elements.
    const projectId = pId;
    const tenantId = tId;
    const filter = `companyName="${userFilter}"`;
    const formattedParent = client.tenantPath(projectId, tenantId);

    const request = {
        parent: formattedParent,
        filter: filter,
    };

    client
        .listJobs(request)
        .then(responses => {
            const resources = responses[0];
            for (const resource of resources) {
                console.log(`Job name: ${resource.name}`);
                console.log(`Job requisition ID: ${resource.requisitionId}`);
                console.log(`Job title: ${resource.title}`);
                console.log(`Job description: ${resource.description}`);
            }
        })
        .catch(err => {
            console.error(err);
        });
}

sampleListJobs("forward-dream-193619", "d2f75edb-1100-0000-0000-0088db7aef4b", "projects/forward-dream-193619/tenants/d2f75edb-1100-0000-0000-0088db7aef4b/companies/a54e1d18-6995-4a3e-932e-e03f77779f76");

module.exports = router;