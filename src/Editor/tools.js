import Embed from '@editorjs/embed'
import List from '@editorjs/list'
import Header from '@editorjs/header'
import Delimiter from '@editorjs/delimiter'
import SimpleImage from '@editorjs/simple-image'
import Underline from '@editorjs/underline'
import MyBlockTool from "../MyBlock/tool";

export const tools = {
    header: {
        class: Header,
        config: {
            placeholder: 'Enter a header',
            levels: [1, 2, 3],
        }
    },
    list: List,
    underline: Underline,
    image: SimpleImage,
    delimiter: Delimiter,
    embed: Embed,
    myBlock: MyBlockTool,
}