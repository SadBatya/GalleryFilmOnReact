class LocaleStorageService {
  getFilmsByIds() {
    return JSON.parse(localStorage.getItem('films')) || [];
  }

  toggleFilmId(id) {
    const filmIds = this.getFilmsByIds();
    const findFilmId = filmIds.find((filmId) => filmId === id);

    if (findFilmId) {
      this.removeFilmId(findFilmId);
    } else {
      this.setFilmId(id);
    }
  }

  setFilmId(id) {
    const filmIds = this.getFilmsByIds();
    localStorage.setItem('films', JSON.stringify([...filmIds, id]));
  }

  removeFilmId(id) {
    const filmIds = this.getFilmsByIds();

    const filteredFilmsIds = filmIds.filter(filmId => id !== filmId);

    localStorage.setItem('films', JSON.stringify(filteredFilmsIds));

  }
}

export default new LocaleStorageService();
