package br.ufsc.bridge.backend

import javax.persistence.Entity
import javax.persistence.Id

@Entity(name="tarefas")
data class Tarefa (
    @Id //Aqui teria um @GeneratedValue, mas eu vou gerar isso pelo frontend
    var id: String? = null,
    val descricao:String
)