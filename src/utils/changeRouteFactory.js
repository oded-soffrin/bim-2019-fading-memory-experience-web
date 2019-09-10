
import queryString from 'query-string';

export default (history) => {
    return (newRoute) => {
        const currentSearch = queryString.parse(window.location.search);
        const { url, query } = queryString.parseUrl(newRoute);
        history.push(`${url}?${queryString.stringify({ ...currentSearch, ...query })}`);
      };
}