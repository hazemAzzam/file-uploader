document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('fileInput');
  const uploadBtn = document.getElementById('uploadBtn');
  const clearSelectionsBtn = document.getElementById('clearSelectionsBtn');
  const uploadingSpinner = document.getElementById('uploadingSpinner');
  const fileListBody = document.querySelector('.file-list tbody');

  fileInput.addEventListener('change', updateFileList);
  clearSelectionsBtn.addEventListener('click', clearSelections);

  // Disable the upload button by default
  uploadBtn.disabled = true;

  fileInput.addEventListener('change', () => {
    // Enable the upload button if files have been selected
    uploadBtn.disabled = fileInput.files.length === 0;
  });

  uploadBtn.addEventListener('click', () => {
    // Show uploading animation
    uploadingSpinner.style.display = 'inline-block';

    // Simulate uploading delay (replace with actual upload logic)
    setTimeout(() => {
      // Hide uploading animation
      uploadingSpinner.style.display = 'none';
      
      // Perform your upload logic here
      alert('Files uploaded successfully!');
    }, 2000); // Simulated 2-second delay
  });

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  function updateFileList() {
    fileListBody.innerHTML = ''; // Clear previous entries
    for (const file of fileInput.files) {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      const sizeCell = document.createElement('td');

      nameCell.textContent = file.name;
      sizeCell.textContent = formatBytes(file.size);

      row.appendChild(nameCell);
      row.appendChild(sizeCell);
      fileListBody.appendChild(row);
    }
  }

  function clearSelections() {
    fileInput.value = null; // Reset file input
    fileListBody.innerHTML = ''; // Clear displayed files
  }
});
  