export function addActiveToLink (linkList, pathname, defaultLinkName) {
  var active
  var newLinkList = linkList.map(link => {
    if (link.link !== '' && pathname.endsWith(link.link)) {
      active = true
      link['active'] = true
      return link
    }
    return link
  })
  if (!active) {
    newLinkList = newLinkList.map(link => {
      if (link.name === defaultLinkName) {
        link['active'] = true
        return link
      }
      return link
    })
  }
  return newLinkList
}