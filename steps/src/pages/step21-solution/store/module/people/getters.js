export default {
  filterPeople({ search, people }) {
    if (!search) {
      return people
    }
    return people.filter(person => person.firstname.toLowerCase().indexOf(search) != -1 || person.lastname.toLowerCase().indexOf(search) != -1)
  }
}