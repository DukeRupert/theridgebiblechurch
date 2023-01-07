import postmark from 'postmark';
import { POSTMARK_API_KEY } from '$env/static/private';

const postmarkClient = new postmark.ServerClient(POSTMARK_API_KEY);

export default postmarkClient;
