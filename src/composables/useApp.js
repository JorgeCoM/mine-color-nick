import {
    ref
} from "vue";

const useApp = () => {

    const colors = ref([{
            name: "&0",
            colorClass: "background: #000; color: #fff;",
        },
        {
            name: "&1",
            colorClass: "background: #2100AA; color: #fff;",
        },
        {
            name: "&2",
            colorClass: "background: #00AA20; color: #fff;",
        },
        {
            name: "&3",
            colorClass: "background: #00A9C8; color: #fff;",
        },
        {
            name: "&4",
            colorClass: "background: #E10000; color: #fff;",
        },
        {
            name: "&5",
            colorClass: "background: #FF0088; color: #fff;",
        },
        {
            name: "&6",
            colorClass: "background: #FFAA00; color: #fff;",
        },
        {
            name: "&7",
            colorClass: "background: #AAAAA8;",
        },
        {
            name: "&8",
            colorClass: "background: #555554; color: #fff;",
        },
        {
            name: "&9",
            colorClass: "background: #7655FE;",
        },
        {
            name: "&a",
            colorClass: "background: #00FF74;",
        },
        {
            name: "&b",
            colorClass: "background: #0BFFFF;",
        },
        {
            name: "&c",
            colorClass: "background: #FF5533;",
        },
        {
            name: "&d",
            colorClass: "background: #FF55DD;",
        },
        {
            name: "&e",
            colorClass: "background: #DEFF53;",
        },
        {
            name: "&f",
            colorClass: "background: #FFFFFC;",
        }
    ]);
    const textType = ref([{
            name: 'Bold',
            type: '&l',
            textClass: 'font-weight: bold;'
        },
        {
            name: 'Underline',
            type: '&n',
            textClass: 'text-decoration: underline;'
        },
        {
            name: 'Italic',
            type: '&o',
            textClass: 'font-style: italic;'
        },
        {
            name: 'Line-through',
            type: '&m',
            textClass: 'text-decoration: line-through;'
        },
        {
            name: 'Obfuscated',
            type: '&k',
            textClass: 'Obfuscated'
        },
        {
            name: 'Reset',
            type: '&r',
            textClass: 'Reset'
        }
    ])
    const nameUser = ref('')

    const code = ref('')

    const codePreview = ref('/nick ')


    return {
        colors,
        textType,
        nameUser,
        code,
        codePreview,
        selectColor: (name) => {
            return `${codePreview.value += name} ${nameUser.value += name}`
        },
        selectTextType: (name) => {
            return `${codePreview.value += name}`
        },

    }
}

export default useApp