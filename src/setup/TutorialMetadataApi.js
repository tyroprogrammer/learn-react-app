import TutorialMetadata from './tutorialMetadata';

export class TutorialMetadataApi {
    static getTutorialMetadata() {
        return [...TutorialMetadata];
    }

    static getCurrentTutorial(route) {
        return (TutorialMetadata.filter(d => d.route === route) || [])[0];
    }

    static getCurrentTutorialIndex(route) {
        return TutorialMetadata.findIndex(d => d.route === route);
    }

    static getPreviousTutorial(route) {
        const currentIndex = TutorialMetadataApi.getCurrentTutorialIndex(route);
        if (currentIndex >= 1) {
            return TutorialMetadata[currentIndex - 1];
        }
    }

    static getNextTutorial(route) {
        const currentIndex = TutorialMetadataApi.getCurrentTutorialIndex(route);
        if (currentIndex < TutorialMetadata.length - 1) {
            return TutorialMetadata[currentIndex + 1];
        }
    }
}

export default new TutorialMetadataApi();