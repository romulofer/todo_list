package br.ufsc.bridge.backend

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@CrossOrigin()
@RestController
@RequestMapping("/tarefas")
class TarefaController(private val repository: TarefaRepository) {

    @PostMapping
    fun create(@RequestBody tarefa: Tarefa): Tarefa = repository.save(tarefa)

    @GetMapping
    fun getAll() = repository.findAll()

    @GetMapping("/{id}")
    fun getById(@PathVariable id:String): ResponseEntity<Tarefa> =
        repository.findById(id).map {
            ResponseEntity.ok(it)
        }.orElse(ResponseEntity.notFound().build())

    @PutMapping("/{id}")
    fun update(@PathVariable id:String, @RequestBody tarefa: Tarefa) :ResponseEntity<Tarefa> =
        repository.findById(id).map {
            val tarefaToUpdate = it.copy(
                tarefa.id,
                tarefa.descricao
            )
            ResponseEntity.ok(repository.save(tarefaToUpdate))
        }.orElse(ResponseEntity.notFound().build())

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id:String): ResponseEntity<Void> =
        repository.findById(id).map {
            repository.delete(it)
            ResponseEntity<Void>(HttpStatus.OK)
        }.orElse(ResponseEntity.notFound().build())

}