def is_quadrado_magico(matriz):
    # Obtém a ordem da matriz (número de linhas ou colunas)
    n = len(matriz)
    
    # Calcula a soma esperada para cada linha, coluna e diagonal
    soma_esperada = n * (n ** 2 + 1) // 2
    
    # Verifica as somas das linhas
    for linha in matriz:
        if sum(linha) != soma_esperada:
            return False
    
    # Verifica as somas das colunas
    for coluna in range(n):
        soma_coluna = sum(matriz[i][coluna] for i in range(n))
        if soma_coluna != soma_esperada:
            return False
    
    # Verifica a soma da diagonal principal
    soma_diagonal_principal = sum(matriz[i][i] for i in range(n))
    if soma_diagonal_principal != soma_esperada:
        return False
    
    # Verifica a soma da diagonal secundária
    soma_diagonal_secundaria = sum(matriz[i][n - i - 1] for i in range(n))
    if soma_diagonal_secundaria != soma_esperada:
        return False
    
    # Se todas as verificações passaram, é um Quadrado Mágico
    return True

# Exemplo de uso:
matriz_exemplo = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
]

# Chama a função e armazena o resultado
resultado = is_quadrado_magico(matriz_exemplo)

# Imprime o resultado
if resultado:
    print("A matriz é um Quadrado Mágico.")
else:
    print("A matriz NÃO é um Quadrado Mágico.")
