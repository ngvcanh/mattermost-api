export default function formatPath(path: string, params: Record<string, any>){
    const matches = path.match(/(\{\s*[a-z\d\-_]+\s*\})/g);
    if (!matches) return path;

    matches
        .map(match => match.replace(/\{\s*|\s*\}/g, ''))
        .filter((value, index, self) => self.indexOf(value) === index)
        .forEach(key => path = path.replace(
            new RegExp(`\\{\\s*${ key }\\s*\\}`, 'g'), 
            key in params ? params[key] : ''
        ));

    return path;
}