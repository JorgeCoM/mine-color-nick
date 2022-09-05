import {
    ref
} from "vue";

const useApp = () => {

    const colors = ref([{
            name: "&0",
            colorHex: "#000",
        },
        {
            name: "&1",
            colorHex: "#2100AA",
        },
        {
            name: "&2",
            colorHex: "#00AA20",
        },
        {
            name: "&3",
            colorHex: "#00A9C8",
        },
        {
            name: "&4",
            colorHex: "#E10000",
        },
        {
            name: "&5",
            colorHex: "#FF0088",
        },
        {
            name: "&6",
            colorHex: "#FFAA00",
        },
        {
            name: "&7",
            colorHex: "#AAAAA8",
        },
        {
            name: "&8",
            colorHex: "#555554",
        },
        {
            name: "&9",
            colorHex: "#7655FE",
        },
        {
            name: "&a",
            colorHex: "#00FF74",
        },
        {
            name: "&b",
            colorHex: "#0BFFFF",
        },
        {
            name: "&c",
            colorHex: "#FF5533",
        },
        {
            name: "&d",
            colorHex: "#FF55DD",
        },
        {
            name: "&e",
            colorHex: "#DEFF53",
        },
        {
            name: "&f",
            colorHex: "#FFFFFC",
        }
    ]);
    const textType = ref([{
            name: '&l',
            type: 'bold'
        },
        {
            name: '&n',
            type: 'Underline'
        },
        {
            name: '&o',
            type: 'Italic'
        },
        {
            name: '&m',
            type: 'Strikethrough'
        },
        {
            name: '&k',
            type: 'Obfuscated'
        },
        {
            name: '&r',
            type: 'Reset'
        }
    ])
    const nameUser = ref(null)

    const code = ref('')

    return {
        colors,
        textType,
        nameUser,
        code,
        selectColor: (name) => {
            console.log(code.value)
            return console.log(code.value.concat('' ,name))
        },
        selectTextType: (name) => {
            return name
        },

    }
}

export default useApp