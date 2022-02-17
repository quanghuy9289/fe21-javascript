var n = parseInt(prompt("Enter a number: "));

function pyramid(n) {
    const columns = 2 * n - 1;// số columns của pyramid
    for (let i = 0; i < n; i++) {// chạy qua từng row
        let step = '';// với mỗi row là một cấp của pyramid
        for (let j = 0; j < columns; j++) {//trên từng row, chạy qua từng column
            let middle = Math.floor(columns / 2);// đây là điểm chính giữa của column hiện hành theo index
            if (middle - i <= j && middle + i >= j) {// nếu column index thuộc đoạn [middle - i, middle + i] dùng #
                step += '*'
            } else {//ngược lại dùng khoảng trắng
                step += ' '
            }
        }
        console.log(step);
    }
}
pyramid(n);