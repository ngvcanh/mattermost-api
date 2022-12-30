import Mattermost from "..";

Mattermost.Configuration.server = 'http://example.com';
Mattermost.Configuration.token = 'dsdasd';
const endpoint = new Mattermost.Endpoint();

export default endpoint;