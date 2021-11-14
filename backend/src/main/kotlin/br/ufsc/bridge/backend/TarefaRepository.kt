package br.ufsc.bridge.backend

import org.springframework.data.jpa.repository.JpaRepository

interface TarefaRepository:JpaRepository<Tarefa, String> {
}