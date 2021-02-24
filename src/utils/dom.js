export default function generateClassName(
    classNames
) {
    return classNames.filter(item => !!item).join(" ");
}