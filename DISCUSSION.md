# Discussion

**Git Strategy**

Typically, I wouldn't "stack" PRs in a way in which one requires the previous; nor would I attempt to merge a local database config into the main branch. I did both here simply in the interest of time. Otherwise, PRs would be independent and follow a three-branch strategy.

**Things to do (Frontend)**

- Add a debounce method to the search input
- Improve the design, especially the interaction between search-term vs. no search-term
- Add unit tests covering functionality; configure an e2e framework such as Cypress
- Implement transition styles
- Add the search functionality to Redux. (It's typically better not to mix approaches to state, but I didn't necessarily want to come off as a Redux-at-all-costs adherent. So I went with handling state & related functionality in two different ways)

**Things to do (Backend)**

I ran out of time before I could do anything with the backend code, but I was also unsure if this project was set-up to see backend suggestions? Anyway...

- Normalize the database by moving Specialties to its own table
  - Then, refactor to utilize separate tables for other things that Advocates can have more of, like phone-numbers and addresses
- Implement versioning, even if it's just a simple date/version number on the url
- Implement a design approach such as REST or GraphQL
- Add backend tests
