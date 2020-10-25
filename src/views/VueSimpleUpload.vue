<template>
    <div>
        <el-row style="background-color: azure">
            <el-form ref="sel" :model="selParam" label-width="80px" size="mini" inline>
                <el-form-item label="文件名称" prop="fileName">
                    <el-input v-model="selParam.fileName" placeholder="请输入文件名称" clearable></el-input>
                </el-form-item>
                <el-form-item label="文件别名" prop="fileShowName">
                    <el-input v-model="selParam.fileShowName" placeholder="请输入文件别名" clearable></el-input>
                </el-form-item>
                <el-form-item label="分类" prop="fileType">
                    <el-select v-model="selParam.fileType" prop="fileType" clearable>
                        <el-option v-for="item in fileType" :key="item.codeNo" :value="item.codeName"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleUploadBtn">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleUploadBtn">上传文件</el-button>
                </el-form-item>
            </el-form>
        </el-row>
        <el-divider></el-divider>

        <el-table :data="resultParam" border style="width: 100%" size="mini">
            <el-table-column prop="fileName" label="文件名称"></el-table-column>
            <el-table-column prop="fileShowName" label="显示名称"></el-table-column>
            <el-table-column prop="size" label="文件大小"></el-table-column>
            <el-table-column prop="uploadDate" label="上传日期"></el-table-column>
            F
            <el-table-column prop="uploadUser" label="上传人"></el-table-column>
            <el-table-column prop="remark" label="备注"></el-table-column>
            <el-table-column label="操作">
                <el-button type="primary">编辑</el-button>
                <el-button type="danger">删除</el-button>
                <el-button type="success">下载</el-button>
            </el-table-column>

        </el-table>

        <el-dialog title="文件上传" :visible.sync="uploadWindowVisible" width="400px" :close-on-click-modal="false"
                   @close="handleDialogClose">
            <el-form ref="upload" :model="param" label-width="80px" size="mini" :rules="paramRules">
                <el-form-item label="文件名称" prop="fileName">
                    <el-input :disabled="true" v-model="param.fileName"></el-input>
                </el-form-item>
                <el-form-item label="文件别名" prop="fileShowName">
                    <el-input v-model="param.fileShowName" placeholder="请输入文件别名"></el-input>
                </el-form-item>
                <el-form-item label="文件分类" prop="fileType">
                    <el-select v-model="param.fileType" style="width: 280px;">
                        <el-option v-for="item in fileType" :key="item.codeNo" :value="item.codeName"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="上傳文件">
                    <uploader :options="options" class="uploader-example">
                        <uploader-unsupport></uploader-unsupport>
                        <uploader-drop>
                            <p>Drop files here to upload or</p>
                            <uploader-btn>select files</uploader-btn>
                        </uploader-drop>
                        <uploader-list></uploader-list>
                    </uploader>
                </el-form-item>
                <el-form-item style="text-align: center">
                    <el-button type="primary" @click="uploadCommit">提交</el-button>
                    <el-button @click="uploadCancel">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>

</template>

<script>
    export default {
        name: "VueSimpleUpload",
        data() {
            return {
                options: {
                    target: '//localhost:3000/upload', // '//jsonplaceholder.typicode.com/posts/',
                    testChunks: false
                },
                attrs: {
                    accept: 'image/*'
                },
                statusText: {
                    success: '成功了',
                    error: '出错了',
                    uploading: '上传中',
                    paused: '暂停中',
                    waiting: '等待中'
                },
                resultParam: [],
                selParam: {
                    fileName: '',
                    fileShowName: '',
                    fileType: '',
                },
                param: {
                    fileName: '',
                    fileShowName: '',
                    fileType: '',
                },
                uploadWindowVisible: false,
                fileType: [
                    {codeNo: '01', codeName: '政府相关'},
                    {codeNo: '02', codeName: '系统维护'},
                    {codeNo: '03', codeName: '银行相关'}
                ],
                paramRules: {
                    fileShowName: [{required: true, message: '请输入文件显示名称', trigger: 'blur'}],
                    fileType: [{required: true, message: '请至少选择一个分类', trigger: 'change'}]
                }
            }
        },
        mounted() {
            this.setStyle();
            this.$nextTick(() => {
                window.uploader = this.$refs.uploader.uploader
            })
        },
        methods: {
            handleUploadBtn() {
                this.uploadWindowVisible = true;
            },
            handleDialogClose() {
                this.uploadWindowVisible = false;
                this.$refs.upload.resetFields();
            },
            uploadCommit() {
                this.$refs.upload.validate((valid) => {
                    if (valid) {
                        this.$message({message: '上传成功', type: "success"})
                        this.handleDialogClose();
                    }
                })

            },
            uploadCancel() {
                this.handleDialogClose();
            },
            complete () {
                console.log('complete', arguments)
            },
            fileComplete () {
                console.log('file complete', arguments)
            },
            setStyle() {
                setTimeout(() => {
                    let elementsByClassName = document.getElementsByClassName("el-form-item");
                    for (let i = 0; i < elementsByClassName.length; i++) {
                        elementsByClassName[i].style.cssText = elementsByClassName[i].style.cssText + "position: relative;top: 8px;"
                    }
                }, 60)
            }
        }
    }
</script>

<style scoped>
    .uploader-example {
        width: 550px;
        padding: 15px;
        font-size: 12px;
        box-shadow: 0 0 2px rgba(0, 0, 0, .4);
    }
    .uploader-example .uploader-btn {
        margin-right: 4px;
    }
    .uploader-example .uploader-list {
        max-height: 440px;
        overflow: auto;
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>