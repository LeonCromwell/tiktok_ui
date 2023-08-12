import AccountItem from './AccountItem';
function SuggestedAccount({ data }) {
    return data.map((item) => <AccountItem key={item.id} data={item} />);
}

export default SuggestedAccount;
