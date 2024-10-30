Mani Maghsoudlou
----------------

### How did I improve the UI/UX design?

Instead of the original design, which was essentially a cluttered table, I used a card layout that gives the app a modern look with a minimalist and aesthetic theme. This improved design provides a better user experience, making the advocate information more readable due to proper spacing between components.

### How did I improve the frontend/backend performance?

Originally, the app fetched all advocates from the backend, which isn’t efficient, especially for large datasets. I added pagination so that the app fetches data by page, improving backend performance since we no longer need to fetch the entire dataset. Pagination also enhances frontend performance by reducing load time, as we only fetch and render one page of data at a time.

### Further Improvements

Querying the `specialties` field required additional effort because it's stored as a `jsonb` column type in the advocate schema. This data type requires a specific approach to query for partial matches within each element of the `specialties` array.

### Potential Improvements

- Add authentication.
- If authentication is added, we could enable a feature for users to create a list of favorite advocates for quick and easy access to their information.
- Add profile pictures for advocates.