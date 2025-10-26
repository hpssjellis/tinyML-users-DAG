const myExpress = require('express');
const myPath = require('path');
const { myMasterDagData } = require('./data.js');

const myApp = myExpress();
const myPort = 3000;

/**
 * @function myGetRelevantNeighbors
 * @description Finds all connected nodes and edges for a given starting node/group (1-level deep).
 * @param {string|string[]} myStartIdsOrGroups Array of IDs or Groups to start filtering from.
 * @param {object} myMasterData The full graph data.
 * @returns {object} Filtered nodes and edges.
 */
function myGetRelevantNeighbors(myStartIdsOrGroups, myMasterData) {
    const myFilteredNodes = new Set();
    const myFilteredEdges = [];
    const myStartIds = new Set();
    
    // 1. Identify starting node IDs based on input IDs or Groups
    myMasterData.nodes.forEach(n => {
        if (myStartIdsOrGroups.includes(n.id) || myStartIdsOrGroups.includes(n.group)) {
            myStartIds.add(n.id);
        }
    });

    myStartIds.forEach(id => myFilteredNodes.add(id));

    // 2. Traverse one level out from starting nodes (find immediate neighbors)
    myMasterData.edges.forEach(myEdge => {
        const isFromStart = myFilteredNodes.has(myEdge.from);
        const isToStart = myFilteredNodes.has(myEdge.to);

        if (isFromStart || isToStart) {
            myFilteredEdges.push(myEdge);
            // Add connected nodes (neighbors)
            if (isFromStart) myFilteredNodes.add(myEdge.to);
            if (isToStart) myFilteredNodes.add(myEdge.from);
        }
    });

    // 3. Finalize node list
    const myFinalNodes = myMasterData.nodes.filter(n => myFilteredNodes.has(n.id));

    return {
        nodes: myFinalNodes,
        edges: myFilteredEdges,
    };
}

// Serve the static index.html file and other assets from the current directory
myApp.use(myExpress.static(myPath.join(__dirname)));

/**
 * API Endpoint: /api/view/:myViewName
 * Returns the filtered graph data for the requested view.
 */
myApp.get('/api/view/:myViewName', (myReq, myRes) => {
    const myViewName = myReq.params.myViewName;
    let myDataToRender;

    try {
        switch (myViewName) {
            case 'All':
                myDataToRender = myMasterDagData;
                break;
            case 'Professor':
                myDataToRender = myGetRelevantNeighbors(['P1', 'P2'], myMasterDagData);
                break;
            case 'Industry':
                myDataToRender = myGetRelevantNeighbors(['I1', 'I2', 'I3', 'P2', 'S3'], myMasterDagData);
                break;
            case 'OpenSource':
                myDataToRender = myGetRelevantNeighbors(['OS1', 'E1', 'E2', 'M1', 'M2'], myMasterDagData);
                break;
            case 'Funding':
                myDataToRender = myGetRelevantNeighbors(['F1', 'F2', 'I1', 'E1'], myMasterDagData);
                break;
            case 'MLSysBook':
                const myBookGroups = ['Professor', 'Student', 'Educator', 'Maker'];
                myDataToRender = myGetRelevantNeighbors(myBookGroups, myMasterDagData);
                break;
            default:
                myDataToRender = myMasterDagData;
        }

        myRes.json(myDataToRender);
    } catch (myError) {
        console.error("Error processing API request for view:", myViewName, myError);
        myRes.status(500).json({ myError: 'Could not generate view data.' });
    }
});

// Start the server
myApp.listen(myPort, () => {
    console.log(`Server listening at http://localhost:${myPort}`);
});
