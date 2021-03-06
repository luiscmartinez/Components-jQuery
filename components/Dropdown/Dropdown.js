class Dropdown {
  constructor($element) {
    this.element = $element
    this.button = $('.dropdown-button')
    this.content = $('.dropdown-content')
    this.button.click(() => {
      this.toggleContent()
    })
  }
  toggleContent() {
    this.content.toggleClass('dropdown-hidden') // Add/remove class to/from content
  }
}

let $dropdown = $('.dropdown')
$dropdown = new Dropdown($dropdown)
