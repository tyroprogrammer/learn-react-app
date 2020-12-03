class FileReader {
    readFile(fileLocation) {
        let _fileLocation = fileLocation.replace('src', '.').replace('.js', '');

        if (fileLocation.includes("exercise") && !fileLocation.includes("solution") && process.env.REACT_APP_TS === "true") {
            _fileLocation = fileLocation.replace('src', '.').replace('.js', '_ts');
        }

        return import(`${_fileLocation}`)
                .then(data => data.default);
    }
}

export default new FileReader();
