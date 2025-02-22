function downloadDataAsJson() {
    
    const filteredData = Object.fromEntries(
        Object.entries(data).filter(([_, value]) => value !== null)
    );    

    const jsonData = JSON.stringify(filteredData, null, 2); // Convert filtered data to JSON string
    const blob = new Blob([jsonData], { type: 'application/json' }); // Create a blob
    const url = URL.createObjectURL(blob); // Create a URL for the blob

    const now = new Date();
    const datetimeString = `${now.getFullYear()}${(now.getMonth()+1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}-${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}${now.getSeconds().toString().padStart(2, '0')}`;

    // Create an anchor element and trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = `scyppan-${datetimeString}-compdata.json`;
    document.body.appendChild(a); // Append the anchor to the document
    a.click(); // Programmatically click the anchor to trigger the download
    document.body.removeChild(a); // Remove the anchor from the document
    URL.revokeObjectURL(url); // Release the blob URL
}
