package com.example.demo.domain.service;

import com.example.demo.domain.dto.UsuarioDTO;
import com.example.demo.domain.mapper.UsuarioMapper;
import com.example.demo.persistence.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public UsuarioDTO save(UsuarioDTO usuarioDTO){
        usuarioRepository.save(UsuarioMapper.toEntinty(usuarioDTO));
        return usuarioDTO;
    }

    public List<UsuarioDTO> getAll(){
        return usuarioRepository.findAll().stream().map(UsuarioMapper::toDto).collect(Collectors.toList());
    }
}