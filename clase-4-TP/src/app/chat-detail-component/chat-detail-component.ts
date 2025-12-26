import { CommonModule } from '@angular/common';
import { Component, Signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../services/chat';
import { Chat } from '../../interfaces/chat';


@Component({
  selector: 'app-chat-detail-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-detail-component.html',
  styleUrl: './chat-detail-component.css',
})
export class ChatDetailComponent {
  chatSignal!: Signal<Chat | undefined>
  newText = ''
  private id?: string

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService
  ){

  }

  ngOnInit():void{
    /* Busca dentro de la url el parametro :id */
    this.id = this.route.snapshot.paramMap.get('id') ?? undefined
    if(this.id){
      /* Busco el chat por id */
      this.chatSignal = this.chatService.getChatSignal(this.id)
    }
    else{
      //Fallback
      this.chatSignal = computed(() => undefined)
    }
  }

  send(){

    if(!this.id || !this.newText.trim()){
      //No se puede enviar si esta condicion es verdadera
      return 
    }
    this.chatService.sendMessage(this.id, this.newText.trim(), true)
    this.newText = ''
  }

  formatDate (date: string){
    if(!date){
      return ''
    }
    const datetime = new Date(date)
    return datetime.toLocaleString()
  }
}
