export const useHelpers = () => {
  const scrollToSection = (section: string) => {
    const sectionElement = document.getElementById(section)
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getActualYear = () => new Date().getUTCFullYear()

  return { scrollToSection, getActualYear }
}
