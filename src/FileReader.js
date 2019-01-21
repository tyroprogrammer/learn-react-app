class FileReader {
    readFile(fileLocation) {
        let _fileLocation = fileLocation.replace('src', '.').replace('.js', '');
        return import(`${_fileLocation}`)
                .then(data => data.default);
    }
}

export default new FileReader();