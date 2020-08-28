class PlayList {
    constructor(player) {
        this.player = player;
    }

    stepBackward(){
        let {current,total,getVideo} = this.player.options.playList
        if(current===1)return
        this.player.options.playList.current--
        current = this.player.options.playList.current
        if(current===1)this.player.template.stepBackward.style.opacity= '0.4'
        if(current<total && this.player.template.stepForward.style.opacity==='0.4')this.player.template.stepForward.style.opacity= ''
        this.player.template.playListCurrent.innerHTML = current
        getVideo(current)
    }

    stepForward(){
        let {current,total,getVideo} = this.player.options.playList
        if(current===total)return
        this.player.options.playList.current++
        current = this.player.options.playList.current
        if(current===total)this.player.template.stepForward.style.opacity= '0.4'
        if(current>1 && this.player.template.stepBackward.style.opacity==='0.4')this.player.template.stepBackward.style.opacity= ''
        this.player.template.playListCurrent.innerHTML = current
        getVideo(current)
    }



}
export default PlayList;